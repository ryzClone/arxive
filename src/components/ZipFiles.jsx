import React, { Component } from "react";
import "../style/ZipFiles.css";
import ZipPng from "../png/section/aside/zipFiles.png";

class ZipFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      zipFiles: [
        "zip1.zip",
        "zip2.zip",
        "zip3.zip",
      ],
    };
  }

  renderZipTable() {
    const { searchText, zipFiles } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "100px" }}>File</th>
            <th>File Name</th>
            <th style={{ width: "200px" }}>Download</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          {zipFiles.map((zipFile, index) => {
            if (searchText && !zipFile.includes(searchText)) {
              return null;
            }

            return (
              <tr key={index} className="table-tr">
                <td>
                  <img
                    src={ZipPng}
                    alt=""
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "20px",
                    }}
                  />
                </td>

                <td>{zipFile}</td>

                <td>
                  <a
                    href={'../zip/zip3.zip'}
                    download={`file${index + 1}.zip`}
                  >
                    Download
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    
    return (
      <div className="block">
        <div className="zip-files">{this.renderZipTable()}</div>
      </div>
    );
  }
}

export default ZipFiles;
