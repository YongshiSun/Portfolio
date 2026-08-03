createBook(
    //left page content
    `
        <header> Table Of Contents</header>
        <ul class="toc_left toc">
            <li id="toc_aboutme"><a href="aboutme.html">About me . . . . . . . . . . . . . . . . . . . . page 2</a></li>
            <li id="toc_experiences"><a href="experiences.html">Experiences . . . . . . . . . . . . . . . . . . page 3</a></li>
            <li id="toc_gameplay"><a href="gameplay.html">Gameplay Projects . . . . . . . . . . .  page 4</a></li>
            <li id="toc_design"><a href="design.html">Design Projects . . . . . . . . . . . . .  page 5</a></li>
            <li id="toc_contact"><a href="contact.html">Contact Info . . . . . . . . . . . . . .  . . page 6</a></li>
        </ul>
    `,
    //right page content
    `
        <h2> Mini Tutorial :</h2>
        <ul class="toc_right toc">
           <li>Each page has a unique color that matches its tab.</li>
            <li>Click a colored tab to navigate to its page.</li>
            <li>Forgot a page color? Click the yellow tab (top left) to return to the Table of Contents.</li>
        </ul>
    `, 1, 0
);