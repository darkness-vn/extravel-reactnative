import { User } from "../types/user.types"
import { useState } from "react"

function withUserData<P extends User>(
    Page: React.ComponentType<P>
) {
    return () => {

        const [user, $user] = useState<User>()

        const props = user as P

        return <Page {...props} />
    }
}