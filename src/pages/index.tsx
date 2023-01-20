import { Greet } from "@/components/greet"
import { MainLayout } from "@/layout/mainLayout"

const Home = () => {

    return (
      <MainLayout>
        <Greet />
      </MainLayout>
    )
}

export default Home