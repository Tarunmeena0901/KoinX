import Typography from '@mui/material/Typography';

function NavBar() {
    return (
        <nav className="flex items-center justify-between bg-gradient-to-br from-emerald-300 to-indigo-600 shadow-md p-4">
          <div className="flex items-center flex-shrink-0 mr-6 ml-4">
            <Typography variant='h4' color={"white"}>Koin-I</Typography>
          </div>
          <div className="hidden md:flex flex-grow mr-4">
            <ul className="flex justify-end space-x-4">
              <li>
                <Typography fontSize={"18px"} fontWeight={"bold"} color={"white"}>Crypto Taxes</Typography>
              </li>
              <li>
                <Typography fontSize={"18px"} fontWeight={"bold"} color={"white"}>Free Tools</Typography>
              </li>
              <li>
                <Typography fontSize={"18px"} fontWeight={"bold"} color={"white"}>Resource Center</Typography>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Typography fontSize={"18px"} color={'white'}>Get Started</Typography>
            </button>
          </div>
        </nav>
    );
}

export default NavBar;