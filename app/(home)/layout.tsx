import Topbar from "@/components/layout/TopBar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  )
}

export default HomeLayout