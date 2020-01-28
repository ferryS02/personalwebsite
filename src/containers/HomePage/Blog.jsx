import React from 'react';
import Card from '../../component/Card/Card.js';

const Blog = (props) => (
    <div>
        <h3 class="title is-3 has-text-centered">Blog</h3>
        <div className="columns is-variable is-8-desktop">
            <div class="column is-one-quarter">
                <Card/>
            </div>
            <div class="column is-one-quarter">
                <Card/>
            </div>
            <div class="column is-one-quarter">
                <Card/>
            </div>
            <div class="column is-one-quarter">
                <Card/>
            </div>
        </div>
    </div>
);

export default Blog