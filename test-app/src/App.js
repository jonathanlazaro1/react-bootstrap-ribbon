import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  Ribbon,
  RibbonGroup,
  RibbonGroupItem,
  RibbonButton
} from "react-bootstrap4-ribbon";
import "react-bootstrap4-ribbon/dist/react-bootstrap-ribbon.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-header">Simple ribbon</h1>

        <Ribbon>
          <RibbonGroup title="Clipboard" colClass="col-md-4">
            <RibbonGroupItem>
              <RibbonButton>
                <RibbonButton.Icon>
                  <i className="fas fa-thumbtack"></i>
                </RibbonButton.Icon>
                <RibbonButton.Title>Pin</RibbonButton.Title>
              </RibbonButton>

              <RibbonButton>
                <RibbonButton.Icon>
                  <i className="fas fa-copy"></i>
                </RibbonButton.Icon>
                <RibbonButton.Title>Copy</RibbonButton.Title>
              </RibbonButton>

              <RibbonButton>
                <RibbonButton.Icon>
                  <i className="fas fa-paste"></i>
                </RibbonButton.Icon>
                <RibbonButton.Title>Paste</RibbonButton.Title>
              </RibbonButton>
            </RibbonGroupItem>
          </RibbonGroup>

          <RibbonGroup title="New" colClass="col-md-5">
            <RibbonGroupItem>
              <RibbonButton>
                <RibbonButton.Icon>
                  <i className="fas fa-folder-open"></i>
                </RibbonButton.Icon>
                <RibbonButton.Title>New folder</RibbonButton.Title>
              </RibbonButton>
            </RibbonGroupItem>
            <RibbonGroupItem direction="column">
              <RibbonButton>
                <RibbonButton.Icon small inline>
                  <i className="fas fa-file">&nbsp;</i>
                </RibbonButton.Icon>
                <RibbonButton.Title inline small>
                  New file
                </RibbonButton.Title>
              </RibbonButton>
              <RibbonButton>
                <RibbonButton.Icon small inline>
                  <i className="fas fa-inbox">&nbsp;</i>
                </RibbonButton.Icon>
                <RibbonButton.Title inline small>
                  Easy access
                </RibbonButton.Title>
              </RibbonButton>
            </RibbonGroupItem>
          </RibbonGroup>

          <RibbonGroup title="Select" colClass="col-md-3">
            <RibbonGroupItem direction="column">
              <RibbonButton>
                <RibbonButton.Icon small inline>
                  <i className="fas fa-check-square">&nbsp;</i>
                </RibbonButton.Icon>
                <RibbonButton.Title small inline>
                  Select all
                </RibbonButton.Title>
              </RibbonButton>
              <RibbonButton>
                <RibbonButton.Icon small inline>
                  <i className="fas fa-check">&nbsp;</i>
                </RibbonButton.Icon>
                <RibbonButton.Title small inline>
                  Toggle selection
                </RibbonButton.Title>
              </RibbonButton>
            </RibbonGroupItem>
          </RibbonGroup>
        </Ribbon>

        <h1 className="page-header">Tabbed ribbons</h1>

        <Tabs defaultActiveKey={0} animation={false} id="example-tabbed-ribbon">
          <Tab eventKey={0} title="Start">
            <Ribbon>
              <RibbonGroup title="Clipboard" colClass="col-md-4">
                <RibbonGroupItem>
                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-thumbtack"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>Pin</RibbonButton.Title>
                  </RibbonButton>

                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-copy"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>Copy</RibbonButton.Title>
                  </RibbonButton>

                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-paste"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>Paste</RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
              </RibbonGroup>

              <RibbonGroup title="New" colClass="col-md-5">
                <RibbonGroupItem>
                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-folder-open"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>New folder</RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
                <RibbonGroupItem direction="column">
                  <RibbonButton>
                    <RibbonButton.Icon small inline>
                      <i className="fas fa-file">&nbsp;</i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title inline small>
                      New file
                    </RibbonButton.Title>
                  </RibbonButton>
                  <RibbonButton>
                    <RibbonButton.Icon small inline>
                      <i className="fas fa-inbox">&nbsp;</i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title inline small>
                      Easy access
                    </RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
              </RibbonGroup>

              <RibbonGroup title="Select" colClass="col-md-3">
                <RibbonGroupItem direction="column">
                  <RibbonButton>
                    <RibbonButton.Icon small inline>
                      <i className="fas fa-check-square">&nbsp;</i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title small inline>
                      Select all
                    </RibbonButton.Title>
                  </RibbonButton>
                  <RibbonButton>
                    <RibbonButton.Icon small inline>
                      <i className="fas fa-check">&nbsp;</i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title small inline>
                      Toggle selection
                    </RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
              </RibbonGroup>
            </Ribbon>
          </Tab>

          <Tab eventKey={1} title="Release">
            <Ribbon>
              <RibbonGroup title="Send">
                <RibbonGroupItem>
                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-share-square"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>Share</RibbonButton.Title>
                  </RibbonButton>

                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-envelope"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>E-mail</RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
              </RibbonGroup>

              <RibbonGroup title="Release for">
                <RibbonGroupItem>
                  <RibbonButton>
                    <RibbonButton.Icon>
                      <i className="fas fa-lock"></i>
                    </RibbonButton.Icon>
                    <RibbonButton.Title>Close releasing</RibbonButton.Title>
                  </RibbonButton>
                </RibbonGroupItem>
              </RibbonGroup>
            </Ribbon>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
