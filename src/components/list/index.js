import React, { Component } from 'react'

import './style.css'

class List extends Component {
    render() {
        const props = this.props
        const list1 = []
        const list2 = []

        props.repos.map((repo, index) => (index % 2 === 0) ? list1.push(repo) : list2.push(repo))
        
        return (
            <section className="list">
                <h2 className="sec-title">{props.title}</h2>
                
                <div className="masonry">
                    <div className="masonry-column">
                        {list1.map((repo) => {
                            return (
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                                    <article className="card">
                                        <h4 className="cart-title">{repo.name}</h4>
                                        <p className="card-description">{repo.description}</p>
                                        <footer className="cart-footer">
                                            <i className="fas fa-code"></i> <p>{repo.language}</p>
                                            <i className="fas fa-star"></i> <p>{repo.stargazers_count}</p>
                                            <i className="fas fa-code-branch"></i> <p>{repo.forks_count}</p>
                                        </footer>
                                    </article>
                                </a>
                            )
                        })}
                    </div>

                    <div className="masonry-column">
                        {list2.map((repo) => {
                            return (
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                                    <article className="card">
                                        <h4 className="cart-title">{repo.name}</h4>
                                        <p className="card-description">{repo.description}</p>
                                        <footer className="cart-footer">
                                            <i className="fas fa-code"></i> <p>{repo.language}</p>
                                            <i className="fas fa-star"></i> <p>{repo.stargazers_count}</p>
                                            <i className="fas fa-code-branch"></i> <p>{repo.forks_count}</p>
                                        </footer>
                                    </article>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default List