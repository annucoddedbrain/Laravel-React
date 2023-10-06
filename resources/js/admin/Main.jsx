import React from 'react';
import {Admin, Resource} from 'react-admin';
import { PostList, PostEdit, PostCreate, PostIcon } from './pages/posts';

export default function Main({ url }) {

    return (
        <>
            <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
        </>
            )
}

