/* eslint-disable no-useless-escape */
/* tslint:disable */
module.exports = projectPath => {
  const cwd = process.cwd()

  const basePath = `${projectPath}/pages/\{{ pascalCase name }}`

  return {
    name: "Class component",
    generator: {
      description: "Create pages or stateful components",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What should it be called?",
          default: "ExampleButton"
        }
      ],
      actions: [
        {
          type: "add",
          path: `${basePath}/\{{ name }}.tsx`,
          templateFile: `${cwd}/generators/ClassComponent/templates/component.tsx.hbs`,
          abortOnFail: true
        },
        {
          type: "add",
          path: `${basePath}/\{{ name }}.style.ts`,
          templateFile: `${cwd}/generators/Shared/templates/component.style.ts.hbs`,
          abortOnFail: true
        },
        {
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: `${cwd}/generators/Shared/templates/index.ts.hbs`,
          abortOnFail: true
        }
      ]
    }
  }
}
