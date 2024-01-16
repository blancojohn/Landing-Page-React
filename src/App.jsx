import React from 'react';
import NavBar from "./NavBar"
import Jumbotron from './Jumbotron';
import SecciónCards from "./SecciónCards";
import SecciónFooter from "./SecciónFooter";

const App = () => {
    return (
        <>  
            < NavBar titulo="Start Bootstrap" />
            < Jumbotron h1="A Warm Welcome" descripciónJumbotron="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti corrupti alias, earum recusandae suscipit, ipsa accusantium vero repellat, repudiandae iste facilis voluptas excepturi obcaecati aspernatur tenetur dolorum laboriosam! Eveniet!" textoBotónJumbo="Call To Action"/>
            <div className='container'>
                <div className='row d-flex md-6'>
                    <div className='col-lg-3 col-xs-12'>
                        < SecciónCards imagen= "https://picsum.photos/id/19/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-lg-3 col-xs-12'>
                        < SecciónCards imagen= "https://picsum.photos/id/10/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-lg-3 col-xs-12'>
                        < SecciónCards imagen= "https://picsum.photos/id/11/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>
                    <div className='col-lg-3 col-xs-12 '>
                        < SecciónCards imagen= "https://picsum.photos/id/29/500/325" cardTitle="Card title" textoBotón="Find Out More" descripción="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis" texto="Find Out More"/>
                    </div>

                </div>
            </div>
            < SecciónFooter texto="Copyright& Your Website 2023" />

        </>
    )
}


export default App;

