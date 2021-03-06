import Helmet from 'react-helmet'
import React, { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ProjectsNav() {
    return (
        <Fragment>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <nav className='projects_nav'>
                <ul>
                    <li><NavLink to="all">All</NavLink></li>
                    <li><NavLink to="web">Web</NavLink></li>
                    <li><NavLink to="android">Android</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default ProjectsNav