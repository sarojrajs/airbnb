import { Button } from '@material-ui/core'
import React from 'react'
import './Searchpage.css'
import SearchResult from './SearchResult'
function Searchpage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 Stays. </p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_q&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest. 1 bedroom. 1 bed. 1.6 shared bathrooms. Wifi. Kitchen. Free Parking. Washing Machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />

<SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_q&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest. 1 bedroom. 1 bed. 1.6 shared bathrooms. Wifi. Kitchen. Free Parking. Washing Machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
        </div>
    )
}

export default Searchpage
