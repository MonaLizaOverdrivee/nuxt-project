export const state = () => ({
  lowVisionState: false,
  colorClass: 'color-scheme--black',
  sizeClass: 'size-scheme--medium',
})

export const mutations = {
  switchVision(state) {
    state.lowVisionState = !state.lowVisionState
  },
  changeColorClass(state, className) {
    state.colorClass = className
  },
  changeSizeClass(state, className) {
    state.sizeClass = className
  },
}
export const getters = {
  lowVisionState: ({ lowVisionState }) => lowVisionState,
  colorClass: ({ colorClass }) => colorClass,
  sizeClass: ({ sizeClass }) => sizeClass,
}
export const actions = {
  addLowVisionClass({ state, commit }) {
    commit('switchVision')
  },
}
