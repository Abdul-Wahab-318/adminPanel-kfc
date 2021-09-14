import React from 'react'
import Header from '../../components/header/Header'
import SideBar from '../../components/sideBar/SideBar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'


export default function AdminPanel() {
    return (
        <div className="admin-panel">
            <div className="page-content">
             <Header/>
              <div className="container-fluid">
                <div className="row">
                  <SideBar/>
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Chart />
                    <Table/>
                  </main>
                </div>
              </div>
            </div>
        </div>
    )
}
