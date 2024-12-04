
import Searchbar from "../components/SearchBar"
import notification from "../assets/images/notification.svg"
import man from "../assets/images/man.svg"
import ProfileDropdown from "../components/ProfileDropdown"
import Toggleswitch from "../components/ToggleSwitch"



const Navbar = () => {
  return (
 
      <div className="w-[95%] font-pop h-[10vh]  flex flex-row  justify-end py-4 ">
        
        <Searchbar/>
        <div className="flex">

          
          <Toggleswitch/>
          <button className="bg-[#E6E6E6] w-9 h-9 rounded-full flex items-center justify-center mr-5">
            <img src={notification} width={25} alt="" />
          </button>
          <div className="h-9 w-[75px] pl-1 bg-[#E6E6E6] rounded-[30px] flex flex-row justify-around">
            <img src={man} width={32} height={35} alt="man" />
            <ProfileDropdown />
          </div>


        </div>
      </div>
  )
}

export default Navbar