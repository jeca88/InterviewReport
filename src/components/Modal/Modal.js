import './Modal.scss';

const Modal = ({ reportsData, handleClose, modal, getRealDate }) => {

    if (!modal) { return null }

    return (
        <div className="Modal-Container">
            <section className="modal-main">
                <h3>{reportsData.candidateName}</h3>
                <div>
                    <p>Company: {reportsData.companyName}</p>
                    <p>Interview Date: {getRealDate(reportsData.interviewDate)}</p>
                    <p>Phase: {reportsData.phase}</p>
                    <p>Status: {reportsData.status}</p>
                </div>
                <div>
                    <h3>Notes</h3>
                    <p>{reportsData.note}</p>
                </div>
                <button type="button" onClick={handleClose}>
                    Close
          </button>

            </section>
        </div>
    )
}

export default Modal;