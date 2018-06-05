#!/bin/bash
# publish_packages.sh uploads our packages to package repositories like npm
set -o nounset -o errexit -o pipefail
ROOT=$(dirname $0)/..
if [[ "${TRAVIS_OS_NAME:-}" == "linux" ]]; then
echo "Publishing Plugin archive to s3://rel.pulumi.com/:"
    for OS in "darwin" "linux" "windows"
    do
        for ARCH in "amd64"
        do
            export GOOS=${OS}
            export GOARCH=${ARCH}

            ${ROOT}/scripts/publish-plugin.sh
        done
    done

    # Publish the NPM package.
    echo "Publishing NPM package to NPMjs.com:"
    pushd ${ROOT}/pack/nodejs/bin

    NPM_TAG="dev"

    # If the package doesn't have a pre-release tag, use the tag of latest instead of
    # dev. NPM uses this tag as the default version to add, so we want it to mean
    # the newest released version.
    if [[ $(jq -r .version < package.json) != *-* ]]; then
        NPM_TAG="latest"
    fi

    # Now, perform the publish.
    npm publish -tag ${NPM_TAG}
    npm info 2>/dev/null
    popd

    # Next, publish the PyPI package.
    echo "Publishing Pip package to pulumi.com:"
    twine upload \
        --repository-url https://pypi.pulumi.com?token=${PULUMI_API_TOKEN} \
        -u pulumi -p pulumi \
        ${ROOT}/pack/python/bin/dist/*.tar.gz
fi