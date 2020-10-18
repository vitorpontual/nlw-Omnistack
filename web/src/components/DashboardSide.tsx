import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/mapMarker.svg'
import Img1 from '../images/dashboardindex.svg'
import Img2 from '../images/dashboardpending.svg'
import Img3 from '../images/logout.svg'

import '../styles/components/sidebar.css'

export default function Sidebar() {

    const { goBack } = useHistory();

    return(
      <aside className='app-sidebar'>
        <img src={mapMarkerImg} alt="Happy" />

        <main>
            <button>
                <img src={Img1} alt="Dashboard"/>
            </button>

            <button>
                <img src={Img2} alt="Pending" />
            </button> 
        </main>

        <footer>
            <button type="button" onClick={goBack}>
                <img src={Img3} alt="Logout"  />
            </button>
        </footer>
      </aside>
    );
}