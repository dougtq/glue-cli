module.exports = {
    name: 'test',
    run: async toolbox => {
        const { print, parameters } = toolbox

        if (parameters.options.soma) {
            print.success("A soma é:", parameters.first + parameters.second)
        }
    }
  }
