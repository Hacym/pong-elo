var m = require('mithril');

var testing = "Hello";

var Header = {
    toggleMobileMenu: function() { 
        var menuToggle = document.getElementById("mobile-menu-toggle");
        menuToggle.classList.toggle("is-active");
        var menu = document.getElementById("mobile-menu");
        menu.classList.toggle("is-active");
    },
    testing: m.prop(),
    view: function() {
        return (
            <nav class="navbar top-nav">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <div class="icon">
                            <i class="fa fa-angle-up arrow-up" aria-hidden="true"></i>
                        </div>
                        &nbsp;Ping Pong ELO&nbsp; {this.testing}
                        <div class="icon">
                            <i class="fa fa-angle-down arrow-down" aria-hidden="true"></i>
                        </div>
                    </a>
                    <div class="navbar-burger" id="mobile-menu-toggle" onclick={this.toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-menu" id="mobile-menu">
                        <a class="navbar-item" href="#!/">
                            Home
                        </a>
                        <a class="navbar-item" href="#!/matches">
                            Matches
                        </a>
                        <a class="navbar-item" href="#!/Ladder">
                            Ladder
                        </a>
                        <a class="navbar-item" href="#!/account">
                            <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Mycah Pleasant
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

module.exports = Header
