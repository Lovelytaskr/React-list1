import React, { Component } from "react";
import $ from "jquery";
import Card from "../Components/Card";

class Agenda extends Component {
    constructor() {
        super()
        this.state = {
            event: [
                {
                    nama: "Hari Peduli Sampah Nasional", tanggal: "21 Februari",
                    cover: "https://1.bp.blogspot.com/--e6SZPamN8w/YCdUH4BKjGI/AAAAAAAAXwQ/JpOvDb4xunAOLmdpKlYAj3txXiH0tjURwCLcBGAsYHQ/s2048/Hari%2BPeduli%2BSampah%2BNasional-07.jpg"
                },
                {
                    nama: "Hari Hutan Sedunia", tanggal: "21 Maret",
                    cover: "https://wartajavaindo.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-21-at-10.00.06.jpeg"
                },
                {
                    nama: "Hari Bumi", tanggal: "22 April",
                    cover: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/earth-day-flyers-poster-design-template-279dd96627acbfb1af50897700ff207e_screen.jpg?ts=1561514103"
                },
                {
                    nama: "Hari Air Sedunia", tanggal: "22 Maret",
                    cover: "https://1.bp.blogspot.com/-_8KK0sQk_X0/YFSsqd_3bBI/AAAAAAAAYJo/KDs8SinAzc8BDlbp8CTB_5-Vqv6D9EdVACLcBGAsYHQ/s1080/Artboard%2B10-100.jpg"
                },
                {
                    nama: "Hari Peringatan Laut dan Samudera nasional", tanggal: "15 Januari",
                    cover: "https://png.pngtree.com/png-vector/20220111/ourlarge/pngtree-selamat-memperingati-hari-dharma-samudera-2022-png-image_4289189.png"
                },
                {
                    nama: "Hari Lahan Basah Sedunia", tanggal: "02 Februari",
                    cover: "http://himasita.lk.ipb.ac.id/files/2018/02/AFD13A72-1D89-4F54-9204-B872ADD85C69.jpeg"
                },
            ],

            action: "",
            nama: "",
            tanggal: "",
            cover: "",
            selectedItem: null
        }
    }

    Add = () => {
        $("#modal_event").modal("show")
        this.setState({
            nama: "",
            tanggal: "",
            cover: "",
            action: "insert",
        })
    }

    Edit = (item) => {
        $("#modal_event").modal("show")
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            cover: item.cover,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();

        let tempEvent = this.state.event

        if (this.state.action === "insert") {
            //menambah data agenda
            tempEvent.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal,
                cover: this.state.cover
            })
        } else if (this.state.action === "update") {
            //menyimpan perubahan data
            let index = tempEvent.indexOf(this.state.selectedItem)

            tempEvent[index].nama = this.state.nama
            tempEvent[index].tanggal = this.state.tanggal
            tempEvent[index].cover = this.state.cover

        }

        this.setState({ event: tempEvent })

        //menutup komponen modal_event
        $("#modal_event").modal("hide")
    }

    Drop = (item) => {
        //konfirmasi
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            //mengapus data
            let tempEvent = this.state.event
            //posisi index yang akan dihapus
            let index = tempEvent.indexOf(item)

            //hapus data
            tempEvent.splice(index, 1)

            this.setState({ event: tempEvent })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.event.map((item, index) => (
                        <Card
                            nama={item.nama}
                            tanggal={item.tanggal}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Event
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.nama}
                                        onChange={ev => this.setState({ nama: ev.target.value })}
                                        required />

                                    Tanggal Event
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({ tanggal: ev.target.value })}
                                        required />

                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({ cover: ev.target.value })}
                                        required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agenda;