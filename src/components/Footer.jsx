import React from 'react';
import "../App.css"

class Footer extends React.Component
{   
    render()
    {
        return(
            <footer class="site-footer">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                        <h4>About</h4>
                        <p class="text-justify">The React Online Party Store project is a web application designed to sell tickets to events and organize parties. The application has a modular architecture that allows you to expand its functionality and flexibly customize it for specific business needs.</p>
                        </div>

                        <div class="col-md-4">
                        <h4>Contacts</h4>
                        <ul class="footer-links">
                            <li><a href="https://www.instagram.com/zharkov.artem.988/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100086510018277">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/in/artem-zharkov-514a621a1">LinkedIn</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <p class="copyright-text">Made by campus team in 2023</p>
                        </div>
                    </div>
                    </div>
            </footer>
        )
    }
}
export default Footer

