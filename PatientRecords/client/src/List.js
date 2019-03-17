import React, { Component } from 'react'
import { getList } from './ListFunctions'

class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: []
        }

    }

    componentDidMount () {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            term: e.target.value,
            editDisabled: 'disabled'
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState({
                term: '',
                items: [...data]
            },
                () => {
                    console.log(this.state.term)
                })
        })
    }
/*
    onSubmit = e => {
        e.preventDefault()
        this.setState({ editDisabled: '' })
        addToList(this.state.term).then(() => {
            this.getAll()
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.term, this.state.id).then(() => {
            this.getAll()
        })
    }

    onEdit = (item, itemid, e) => {
        e.preventDefault()
        this.setState({
            id: itemid,
            term: item
        })
        console.log(itemid)
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter((item, index) => {
            if (item[1] === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
    }
*/
    render () {
        return (

                <table className="table table-striped">
                <thead>
                  <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">PatientMRN</th>
                      <th scope="col">FirstName</th>
                      <th scope="col">LastName</th>
                      <th scope="col">DOB</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phonenumber</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                            <td className="text-left">{item[6]}</td>
                            <td className="text-left">{item[5]}</td>
                            <td className="text-left">{item[4]}</td>
                            <td className="text-left">{item[3]}</td>
                            <td className="text-left">{item[2]}</td>
                            <td className="text-left">{item[1]}</td>
                            <td className="text-left">{item[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        )
    }
}

export default List
