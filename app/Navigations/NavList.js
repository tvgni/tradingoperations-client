import React from "react";
import List from "devextreme-react/list";
import Usuarios from "../Usuarios";
import Informes from "../Informes";

import history from "./history";
//import { createBrowserHistory } from 'history';

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

 
const navigation = [
    { id: 1, text: "Usuarios", icon: "message", filePath: 'Usuarios' },
    { id: 2, text: "Informes", icon: "check", filePath: 'Informes' },
    //{ id: 3, text: "Usuarios", icon: "trash", filePath: "usuarios" },
    //{ id: 4, text: "Usuarios", icon: "mention", filePath: "usuarios" }
];

//const history = createBrowserHistory();

class NavList extends React.PureComponent {

    onItemClick = (e) => {
        const { filePath } = e.itemData;
        history.push(filePath);
      }
    

    loadView = (e) => {
        history.push(e.addedItems[0].filePath);
        this.props.stateHandler({ isDrawerOpen: false });
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <List
                    dataSource={navigation}
                    width={200} 
                    selectionMode="single"
                    displayExpr="text"
                    ///onItemClick={this.onItemClick}
                    onSelectionChanged={this.loadView} />

                            {/*<Routes>
                                <Route exact   path="/" Component={Informes} />
                                <Route    path="/Informes" Component={Informes} />
                                <Route    path="/Usuarios" Component={Usuarios} />
                                <Route    path="/Informes" Component={Informes} />

                            </Routes >*/}

                    </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default NavList;
