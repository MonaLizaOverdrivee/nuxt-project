export const state = () => ({
  language: 'rus',
})

export const mutations = {
  switchLanguage(state) {
    state.language = state.language === 'rus' ? 'eng' : 'rus'
  },
}
export const getters = {}
export const actions = {}
