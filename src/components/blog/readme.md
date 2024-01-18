
format:
```
blog: { <<< can be entered to the element
    content: [entry, entry...],
    Title: string
    Context: string
    Image: string
}


entry : {
    type:               'text' | 'image' | 'split' | 'title'
    data:               string
    subtext:            string                                  (type: 'image' | 'split' | 'title')
    split:              [int<1-11>, int<1-11>]                  (type: 'split' )
    split_img_left:     bool                                    (type: 'split' )
}
```

