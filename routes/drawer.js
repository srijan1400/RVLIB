import { createDrawerNavigator } from 'react-navigation-drawer'

import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import SearchStack from './searchStack'
import ReservationsStack from './reservationStack'
import ProfileStack from './profileStack'
import LoginStack from './loginStack'
import { DrawerContent } from './drawerContent'
const RootDrawerNavigator = createDrawerNavigator(
    {
        Logout:
        {
            screen:LoginStack
        },
        Home:{
            screen:HomeStack
        },
        Search:
        {
            screen:SearchStack
        },
        Reservation:
        {
            screen:ReservationsStack
        },
        Profile:
        {
            screen:ProfileStack
        }
    },
    {
        contentOptions:
        {
            itemsContainerStyle:
            {
                marginTop:100,
                marginBottom:30

            }
        }
    }
)

export default createAppContainer(RootDrawerNavigator);