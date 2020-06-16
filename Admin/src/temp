import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          todo : '',
          todo_list : [],
          notification : []
      }
  }

  handleAdd = (e) => {
    e.preventDefault();
    const data = {
        id : this.state.todo_list.length,
        todo : this.state.todo
    }

    const temp_todo = this.state.todo_list;
    temp_todo.push(data);

    this.setState({
      todo : '',
      todo_list : temp_todo
    })
  }

  handleChange = (e) => {
      this.setState({
          todo : e.target.value
      })
  }

  handleComplete = (id) => {
    const temp_data = this.state.todo_list.filter(list => list.id !== id);
    const temp_data_notification = this.state.todo_list.filter(list => list.id === id);

    this.setState({
      todo_list : temp_data
    })

    this.handleAddNotification(...temp_data_notification)
  }

  handleAddNotification = (data) => {
    const temp_data = {
      id : data.id,
      todo : data.todo
    }
    const temp_notification = this.state.notification;
    temp_notification.push(temp_data);

    this.setState({
      notification : temp_notification
    })
  }

  handleClearNotification = (id) => {
    const temp_data = this.state.notification.filter(list => list.id !== id);

    this.setState({
      notification : temp_data
    })
  }

  render() {
    const viewTodoList = this.state.todo_list.length ? this.state.todo_list.map((list,index) => {
        return (
            <div className = "border border-dark rounded pt-1 pb-1 mt-2 mb-2" key = {index}>
              <div className = "row">
                <h2 className = "col-md-8 offset-md-1" style = {{textAlign : 'center'}}>{list.todo}</h2>
                <button className = "col-md-2 col-10 mx-auto offset-md-1 btn btn-success" onClick = {() => this.handleComplete(list.id)}>Selesai</button>
              </div>
            </div>
        )
    }) : <h4 className = "p-2 border border-dark rounded" style = {{textAlign  :'center'}}>TODO List Kosong,Harap Membuat TODO List Berikutnya.</h4>;

    const viewNotification = this.state.notification.length ? this.state.notification.map((list,index) => {
      return (
        <div className = "row mt-2 mb-2 p-1 border border-dark rounded" key = {index} onClick = {() => this.handleClearNotification(list.id)}>
            <p>{list.todo}</p>
            <i className = "text-success"><br/>SELESAI</i>
        </div>
      )
    }) : <p>Tidak Ada Notifikasi</p>;

    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-md-9">
            <h1 style = {{textAlign  : 'center'}}>Simple TODO List</h1>
              {viewTodoList}
              <div className = "border border-dark px-3 mt-3 mb-3 rounded pt-3 pb-3">
                  <form className = "form-row" onSubmit = {this.handleAdd}>
                    <div className = "col-md-10 col-10">
                        <label htmlFor="exampleInputEmail1">Nama Kegiatan</label>
                        <input type="text" value = {this.state.todo} className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Nama Kegiatan" onChange = {this.handleChange}/>
                    </div>

                    <div className = "col-md-2 col-10 mx-auto mt-3">
                        <button type = "submit" className = "btn btn-primary" style = {{width : '100%'}}>Simpan</button>
                    </div>
                  </form>
            </div>
          </div>

          <div className = "col-md-3 col-11 mx-auto">
            <h2>Notifikasi</h2>
            {this.state.notification.length ? <small>Sentuh Untuk Menghapus Notifikasi</small> : null}
              {viewNotification}              
          </div>
        </div>
      </div>
    )
  }
}