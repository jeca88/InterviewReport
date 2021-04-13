import './Modal.scss';

const Modal = ({ reportsData, handleClose, modal, getRealDate }) => {

    if (!modal) { return null }

    return (
        <div className="Modal-Container">
            <section className="modal-main">
                <h3>{reportsData.candidateName}</h3>
                <div className="Modal-Information">
                    <div className="Modal-Info">
                        <p className="Modal-Details"><b>Company: </b>{reportsData.companyName}</p>
                        <p className="Modal-Details"><b>Interview Date: </b>{getRealDate(reportsData.interviewDate)}</p>
                        <p className="Modal-Details"><b>Phase: </b>{reportsData.phase.toUpperCase()}</p>
                        <p className="Modal-Details"><b>Status: </b>{reportsData.status.charAt(0).toUpperCase() + reportsData.status.slice(1)}</p>
                    </div>
                    <div className="Modal-Notes">
                        <h4><b>Notes</b></h4>
                        <p className="Modal-Details">{reportsData.note}</p>
                    </div>
                </div>
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    )
}

export default Modal;