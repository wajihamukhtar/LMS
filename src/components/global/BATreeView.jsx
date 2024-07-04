import { Box } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
const sidebarLinks = [
  { icon: '', label: 'Students', items: ['Student list', 'Transfer Student', 'Student Add'] }
]
export const BATreeView=()=>{
  <Box sx={{ width: 250 }} role="presentation">
  {sidebarLinks.map((item, index) => (
    <SimpleTreeView key={index}>
      <TreeItem nodeId={index.toString()} label={item.label}>
        {item.items.map((subItem, subIndex) => (
          <TreeItem key={subIndex} nodeId={`${index}-${subIndex}`} label={subItem} />
        ))}
      </TreeItem>
    </SimpleTreeView>
  ))}
</Box>
}