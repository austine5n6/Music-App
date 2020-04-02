import React from 'react';

export default function Navbar() {
  return(
    <nav class="navbar navbar-expand-md bg-light navbar-light">
    <a class="navbar-brand" href="#">Widget-Music App</a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
  </button>
 

 <div class="collapse navbar-collapse" id="collapsibleNavbar">
     <ul class="navbar-nav">
         <li class="nav-item">
             <a class="nav-link" href="#">Home</a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="#">Songs</a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="#">About</a>
         </li>

     </ul>

 </div>

 </nav> 
  );
}