module.exports = {
    name: 'generate-component',
    description: 'Generates a new component in src/components',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error },
        } = toolbox

        if (!parameters.first) {
            error("Component name was not specified...")
        }

        success(`Generating ${parameters.first} component...`)
        await template.generate({
            template: 'component.js.ejs',
            target: `src/components/${parameters.first}/index.js`,
            props: {
                name: parameters.first
            }
        })

        success(`Component ${parameters.first} generated...`)
    }
  }
