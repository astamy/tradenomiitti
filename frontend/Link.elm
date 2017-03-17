module Link exposing (..)
import Nav exposing (Route, routeToPath, routeToString)
import Html as H
import Html.Events as E
import Html.Attributes as A
import Json.Decode as Json

type AppMessage msg  = Link Route | LocalMessage msg


link : Route -> String -> H.Html (AppMessage msg)
link route title =
  H.a
    [ action route
    , A.href (routeToPath route)
    ]
    [ H.text title ]

button : String -> String -> Route -> H.Html (AppMessage msg)
button title class route =
  H.button
    [ E.onClick (Link route)
    , A.class class
    ]
    [ H.text title ]

-- creates a div where the whole element is clickable and links to the route given in parameteres
linkDiv : String  -> Route  -> List (H.Html (AppMessage msg))-> H.Html (AppMessage msg)
linkDiv class route content =
  H.div
    [ E.onClick (Link route)
    , A.class class
    ]
    content
    
action : Route -> H.Attribute (AppMessage msg)
action route =
  E.onWithOptions
    "click"
    { stopPropagation = False
    , preventDefault = True
    }
    (Json.succeed <| Link route)
