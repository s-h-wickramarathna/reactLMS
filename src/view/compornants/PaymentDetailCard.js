const PaymentDetailCard = () => {
  return (
    <>
      <div className="col-12 col-lg-6 p-3 mb-2">
        <div className="shadow p-3 rounded CourseAndPaymentCardHight">
          <h3 className="fw-bold">Payment Details</h3>
          <div className="col-12 mt-4 fw-semibold">
            <p className="fw-semibold text-primary">
              Course Fee : <span className="text-black">&nbsp;&nbsp;&nbsp;&nbsp;Rs: 400,00.00</span>
            </p>
            <p className="fw-semibold text-primary">
              Discount &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span className="text-black">&nbsp;&nbsp;&nbsp;&nbsp;Rs: 500,0.00</span>
            </p>
            <hr className="border border-2 w-75 border-black" />
            <p className="fw-semibold text-primary">
              Gross Fee &nbsp;&nbsp;:{" "}
              <span className="text-black">&nbsp;&nbsp;&nbsp;&nbsp;Rs: 350,00.00</span>
            </p>
            <hr className="border border-2 w-75 border-black pb-0 mb-0" />
            <hr className="border border-2 w-75 border-black pt-0 mt-1" />
            <div className="col-12 mt-4 shadow">
              <div className="table-responsive CourseAndPaymentCardTableHight">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Semester</th>
                      <th scope="col" className="text-end">Payable Amount (Rs)</th>
                      <th scope="col" className="text-end">Paid Amount (Rs)</th>
                      <th scope="col" className="text-end">Paid Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>First Payment</td>
                      <td className="text-end">500,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Second Payment</td>
                      <td className="text-end">100,00.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Third Payment</td>
                      <td className="text-end">400,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Forth Payment</td>
                      <td className="text-end">400,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Forth Payment</td>
                      <td className="text-end">400,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Fifth Payment</td>
                      <td className="text-end">400,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Sixth Payment</td>
                      <td className="text-end">400,0.00</td>
                      <td className="text-end">----</td>
                      <td className="text-end">----</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetailCard;
