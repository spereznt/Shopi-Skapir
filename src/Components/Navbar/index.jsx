import {NavLink} from 'react-router-dom'

const Navbar = ()=>{
    const activeStyle ='underline underline-offset-4'

    const menuLeft = [
        {to:'/',text:'Skapir',className:'font-semibold text-xl'},
        {to:'/all',text:'All',className:''},
        {to:'/clothes',text:'Clothes',className:''},
        {to:'/electronics',text:'Electronics',className:''},
        {to:'/furnitures',text:'Furnitures',className:''},
        {to:'/toys',text:'Toys',className:''},
        {to:'/others',text:'Others',className:''},
    ];

    const menuRigth = [
        {to:'/email',text :'@SkapirTec.com' , className:'text-black/60'},
        {to:'/my-orders',text:'My Orders',className:''},
        {to:'/my-account',text:'My Account',className:''},
        {to:'/signin',text:'Sign In',className:''},
        {to:'/shoppcar',text:'🛒0',className:''},
    ]

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                {menuLeft.map((items,index)=>(
                    <NavLink
                        key={items.to}
                        to={items.to}
                        className={({isActive})=>
                            isActive && index !==0
                            ? `${items.className} ${activeStyle}`
                            : items.className}
                    >
                    {items.text}
                   </NavLink> 
                ))}
            </ul>
            <ul className='flex items-center gap-3'>
                {menuRigth.map((items,index)=>(
                        <NavLink
                            key={items.to}
                            to={items.to}
                            className={({isActive})=>
                                isActive && index !==0
                                ? `${items.className} ${activeStyle}`
                                : items.className}
                        >
                        {items.text}
                    </NavLink> 
                    ))}
            </ul>
        </nav>
    )
}

export default Navbar