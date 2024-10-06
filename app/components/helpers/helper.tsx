import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})
console.log(useStore.getState())

export default useStore
