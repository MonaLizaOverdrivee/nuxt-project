export const state = () => ({
  lowVisionState: false,
  language: 'rus',
})

export const mutations = {
  switchLanguage(state) {
    state.language = state.language === 'rus' ? 'eng' : 'rus'
  },
  switchVision(state) {
    state.lowVisionState = !state.lowVisionState
  },
}

export const actions = {
  addLowVisionClass({ state, commit }) {
    commit('switchVision')
    if (state.lowVisionState) {
      document.body.classList.add('color-scheme--black', 'size-scheme--medium')
    } else {
      document.body.classList = ''
    }
  },
}
