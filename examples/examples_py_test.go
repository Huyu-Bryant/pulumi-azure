// Copyright 2016-2017, Pulumi Corporation.  All rights reserved.
// +build python all

package examples

import (
	"path"
	"path/filepath"
	"testing"

	"github.com/pulumi/pulumi/pkg/v2/testing/integration"
)

func getPythonBaseOptions(t *testing.T) integration.ProgramTestOptions {
	base := getBaseOptions(t)
	pythonBase := base.With(integration.ProgramTestOptions{
		Dependencies: []string{
			filepath.Join("..", "sdk", "python", "bin"),
		},
	})

	return pythonBase
}

func TestAccDatasourcePy(t *testing.T) {
	test := getPythonBaseOptions(t).
		With(integration.ProgramTestOptions{
			Dir:           path.Join(getCwd(t), "datasource-py"),
			RunUpdateTest: true,
		})

	integration.ProgramTest(t, &test)
}

func TestAccEventhubPy(t *testing.T) {
	test := getPythonBaseOptions(t).
		With(integration.ProgramTestOptions{
			Dir:           path.Join(getCwd(t), "eventhub-py"),
			RunUpdateTest: true,
			// work around https://github.com/terraform-providers/terraform-provider-azurerm/issues/4598
			AllowEmptyPreviewChanges: true,
			AllowEmptyUpdateChanges:  true,
		})

	integration.ProgramTest(t, &test)
}

func TestAccMinimalPy(t *testing.T) {
	test := getPythonBaseOptions(t).
		With(integration.ProgramTestOptions{
			Dir: path.Join(getCwd(t), "minimal-py"),
		})

	integration.ProgramTest(t, &test)
}
