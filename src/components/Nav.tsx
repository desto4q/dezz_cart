import {IconSearch, IconShoppingBag } from '@tabler/icons-react';

function Nav() {
    return (
        <nav>
            <div className="strict_width">
                <div className="logo">
                    ConForm
                </div>
                <div className="links">
                    <div className="left">ConForm</div>
                    <span>
                        <a href="#">
                            Home
                        </a>
                        <a href="#">
                            Shop
                        </a>
                        <a href="#">
                          Product
                        </a>
                        <a href="#">
                            Categories
                        </a>
                        <a href="#">
                            Blog
                        </a>
                        <a href="#">
                            Pages
                        </a>
                        <a href="#">
                            Shortcode
                        </a>
                    </span>
                    <div className="cart">
                        <a href='#' className="icon">
                            <IconShoppingBag/>
                        </a>
                        <a href='#' className="search">
                            <IconSearch/>
                        </a>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Nav