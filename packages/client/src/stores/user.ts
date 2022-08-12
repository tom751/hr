import create from 'zustand'

interface User {
  id: string
  email: string
  fullName: string
}

interface UserState {
  user?: User
  setUser: (user: User) => void
}

const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user: User) => set(() => ({ user })),
}))

export default useUserStore
