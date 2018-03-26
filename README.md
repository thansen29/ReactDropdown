# React Dropdown Component

Here lies the code for a simple html select box.  Can be specified to be triggered
by click or by hover, and offers customizability in styling.

## Required props:

initValue - pass in as a string ie initValue={ 'Title' } - this will be the content displayed when the box is first mounted

items - pass in an array of comma separated strings, these are the items in the list

onChange - this needs to call a callback function defined in the same class where
the dropdown component is rendered. This function will contain an event, which is the selected item.
example:
```
handleSelection() {
  return e => console.log(e);
}
```

## Optional props:

replace - default is set to true. The default behavior updates the selected field after making a selection,
setting to false will still register the selection and hit your callback function, but the title won't change.

trigger - default is set to click. Pass in "hover" to activate the dropdown on hover instead of click.

classes - pass in an object with the the following potential key-value pairs:
```
{
  displayedItem: '', (the item at the head of the list)
  listContent: '', (the section containing the items)
  dropdownItem: '' (the list item itself)
}
```

### Notes

This is designed to have only one select box open at a time, so if your use case requires you
to be able to have multiple open at a time, this probably isn't the right tool for you.

Sample of how calling this might look:
```
const classes = {
  displayedItem: 'test1',
  listContent: 'test2',
  dropdownItem: 'test3'
}

<DropdownComponent
  initValue={ 'Contact Info' }
  items={ ['Github', 'LinkedIn', 'Portfolio'] }
  onChange={ this.handleSelection() }
  replace={ false }
  trigger={ 'hover' }
  classes={ classes } />
```
