import create from 'zustand'

// type State = {
//   router: string | null
//   dom: React.RefObject<HTMLDivElement> | null
//   setRouter: (router: string) => void
// }

// export const useStore = create<State>((set) => ({
//   router: null,
//   dom: null,
//   setRouter: (router) => set({ router }),
// }))

const useStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})
console.log(useStore.getState())

export default useStore
