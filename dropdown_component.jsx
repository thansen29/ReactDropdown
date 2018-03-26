import React from 'react';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: this.props.initValue,
      trigger: 'click',
      replace: true
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.blurSection = this.blurSection.bind(this);
  }

  componentDidMount() {
    const { trigger, replace } = this.props;
    if (replace === false) {
      this.setState({ replace: false });
    }
    if (trigger === "hover") {
      this.setState({ trigger });
    }
  }

  handleSelect() {
    this.setState({ isOpen: true });
  }

  handleHover() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  blurSection() {
    this.setState({ isOpen: false });
  }

  selectItem(item) {
    return e => {
      if (this.state.replace) {
        this.setState({
          isOpen: false,
          selected: item
         });
      } else {
        this.setState({ isOpen: false });
      }

      this.props.onChange(item);
    };
  }

  render() {
    const { displayedItem, listContent, dropdownItem } = this.props.classes;
    let { items } = this.props;
    let { trigger } = this.state;

    items = items.map((item, index) => {
      return (
        <li
          className={ `dropdown-item ${dropdownItem}` }
          onClick={ this.selectItem(item) }
          key={ index }>
          { item }
        </li>
      );
    });


    return (
      <section className="dropdown-wrapper">
        { trigger === "click"
          ?
          <section
            className="dropdown-section"
            onBlur={ this.blurSection }
            tabIndex="0">

              <div
                className={ `displayed-item ${displayedItem}`}
                onClick={ this.handleSelect }>
                { this.state.selected }
              </div>

            { this.state.isOpen
              ?
              <ul className={ `list-content ${listContent}`} >
                { items }
              </ul>
              :
              null
            }

          </section>

          :

          <section
            className="dropdown-section"
            onMouseEnter={ this.handleHover }
            onMouseLeave={ this.handleHover }
            onBlur={ this.blurSection }
            tabIndex="0">

            <div className={ `displayed-item ${displayedItem}`}>
              { this.state.selected }
            </div>

            { this.state.isOpen
              ?
              <ul className={ `list-content ${listContent}`}>
                { items }
              </ul>
              :
              null
            }

          </section>
        }
      </section>
    );
  }
}

export default DropdownComponent;
