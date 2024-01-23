import picture_1 from './assets/picture_1.png'
import picture_2 from './assets/picture_2.png'
import picture_3 from './assets/picture_3.png'
import picture_4 from './assets/picture_4.png'
import picture_5 from './assets/picture_5.png'
import picture_6 from './assets/picture_6.png'
import cust_1 from './assets/cust_1.png'
import cust_2 from './assets/cust_2.png'
import cust_3 from './assets/cust_3.png'
import cust_4 from './assets/cust_4.png'

export const NAV_LINKS=
[
    {
        link:"Home",
        url:"#home"
    },
    {
        link:"About",
        url:"#about"
    },
    {
        link:"Services",
        url:"#services"
    },
    {
        link:"Contact",
        url:"#contact"
    },
]

export const SERVICES_DATA=[
    {
        picture:picture_1,
        name:'General'
    },
    {
        picture:picture_2,
        name:'Pediatrics'  
    },
    {
        picture:picture_3,
        name:'Nutritional'  
    },
    {
        picture:picture_4,
        name:'Cardiology'  
    },
    {
        picture:picture_5,
        name:'Ophtamology'  
    },
    {
        picture:picture_6,
        name:'Orthopedics'  
    }
    
]
export const customers=[
    {
        name:'Samy White',
        picture:cust_1,
        category:'Cardiology Patient'

    },
    {
        name:'Arthur Northon',
        picture:cust_2,
        category:'Nutrion Patient'

    },
    {
        name:'Kevin Smith',
        picture:cust_3,
        category:'Orthopedics Patient'

    },
    {
        name:'Amanda Jackson',
        picture:cust_4,
        category:'Ophthalmology Patient'

    },
]