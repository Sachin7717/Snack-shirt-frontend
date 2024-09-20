import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};


export const apiExample =  {
    "type": "success",
    "status": 200,
    "response": {
        "total": 32,
        "total_pages": 4,
        "results": [
            {
                "id": "7-ToFEHzMNw",
                "slug": "dog-wearing-superman-costume-7-ToFEHzMNw",
                "alternative_slugs": {
                    "en": "dog-wearing-superman-costume-7-ToFEHzMNw",
                    "es": "perro-con-disfraz-de-superman-7-ToFEHzMNw",
                    "ja": "スーパーマンのコスチュームを着た犬-7-ToFEHzMNw",
                    "fr": "chien-portant-un-costume-de-superman-7-ToFEHzMNw",
                    "it": "cane-che-indossa-il-costume-di-superman-7-ToFEHzMNw",
                    "ko": "슈퍼맨-의상을-입은-개-7-ToFEHzMNw",
                    "de": "hund-im-superman-kostum-7-ToFEHzMNw",
                    "pt": "cachorro-vestindo-fantasia-do-superman-7-ToFEHzMNw"
                },
                "created_at": "2018-07-21T19:56:15Z",
                "updated_at": "2024-09-20T06:10:40Z",
                "promoted_at": "2018-07-22T15:59:39Z",
                "width": 4000,
                "height": 6000,
                "color": "#c0c0c0",
                "blur_hash": "LvIYLTay%Mj]_Nayt7ofofayV@j@",
                "description": "This is my dog in a Superman Costume. It was for his birthday and the photo was taken in my backyard.",
                "alt_description": "dog wearing Superman costume",
                "breadcrumbs": [
                    {
                        "slug": "images",
                        "title": "1,000,000+ Free Images",
                        "index": 0,
                        "type": "landing_page"
                    },
                    {
                        "slug": "feelings",
                        "title": "Feelings Images",
                        "index": 1,
                        "type": "landing_page"
                    },
                    {
                        "slug": "funny",
                        "title": "Funny Images & Pictures",
                        "index": 2,
                        "type": "landing_page"
                    }
                ],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1532202802379-df93d543bac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1532202802379-df93d543bac3"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/dog-wearing-superman-costume-7-ToFEHzMNw",
                    "html": "https://unsplash.com/photos/dog-wearing-superman-costume-7-ToFEHzMNw",
                    "download": "https://unsplash.com/photos/7-ToFEHzMNw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/7-ToFEHzMNw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 843,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "U0LZxIJ69So",
                    "updated_at": "2024-09-01T22:32:34Z",
                    "username": "kerwinelias",
                    "name": "K E",
                    "first_name": "K",
                    "last_name": "E",
                    "twitter_username": null,
                    "portfolio_url": null,
                    "bio": null,
                    "location": null,
                    "links": {
                        "self": "https://api.unsplash.com/users/kerwinelias",
                        "html": "https://unsplash.com/@kerwinelias",
                        "photos": "https://api.unsplash.com/users/kerwinelias/photos",
                        "likes": "https://api.unsplash.com/users/kerwinelias/likes",
                        "portfolio": "https://api.unsplash.com/users/kerwinelias/portfolio",
                        "following": "https://api.unsplash.com/users/kerwinelias/following",
                        "followers": "https://api.unsplash.com/users/kerwinelias/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1701194730916-e9b950864a44image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1701194730916-e9b950864a44image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1701194730916-e9b950864a44image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": null,
                    "total_collections": 0,
                    "total_likes": 0,
                    "total_photos": 31,
                    "total_promoted_photos": 4,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": null,
                        "portfolio_url": null,
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "0qodft4ZK7Q",
                "slug": "woman-sitting-on-kitchen-island-while-holding-instant-camera-inside-kitchen-0qodft4ZK7Q",
                "alternative_slugs": {
                    "en": "woman-sitting-on-kitchen-island-while-holding-instant-camera-inside-kitchen-0qodft4ZK7Q",
                    "es": "mujer-sentada-en-la-isla-de-la-cocina-mientras-sostiene-la-camara-instantanea-dentro-de-la-cocina-0qodft4ZK7Q",
                    "ja": "アイランドキッチンに座りキッチンの中でインスタントカメラを構える女性-0qodft4ZK7Q",
                    "fr": "femme-assise-sur-lilot-de-cuisine-tout-en-tenant-un-appareil-photo-instantane-a-linterieur-de-la-cuisine-0qodft4ZK7Q",
                    "it": "donna-che-si-siede-sullisola-della-cucina-mentre-tiene-la-macchina-fotografica-istantanea-allinterno-della-cucina-0qodft4ZK7Q",
                    "ko": "부엌-안에-즉석-카메라를-들고-부엌-섬에-앉아있는-여자-0qodft4ZK7Q",
                    "de": "frau-sitzt-auf-kucheninsel-wahrend-sie-die-sofortbildkamera-in-der-kuche-halt-0qodft4ZK7Q",
                    "pt": "woman-sitting-on-kitchen-island-while-holding-instant-camera-inside-kitchen-0qodft4ZK7Q"
                },
                "created_at": "2019-11-19T02:08:14Z",
                "updated_at": "2024-09-19T15:27:04Z",
                "promoted_at": "2020-01-14T11:58:44Z",
                "width": 3433,
                "height": 4806,
                "color": "#c0c0c0",
                "blur_hash": "LMLq99009FbvtlR-%gaK?btRI9WB",
                "description": "Model: Lexi Griswold @lexigriswold",
                "alt_description": "woman sitting on kitchen island while holding instant camera inside kitchen",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1574129214345-65fe1d421c30?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1574129214345-65fe1d421c30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1574129214345-65fe1d421c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1574129214345-65fe1d421c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1574129214345-65fe1d421c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1574129214345-65fe1d421c30"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/woman-sitting-on-kitchen-island-while-holding-instant-camera-inside-kitchen-0qodft4ZK7Q",
                    "html": "https://unsplash.com/photos/woman-sitting-on-kitchen-island-while-holding-instant-camera-inside-kitchen-0qodft4ZK7Q",
                    "download": "https://unsplash.com/photos/0qodft4ZK7Q/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/0qodft4ZK7Q/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwyfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 510,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {
                    "ugc": {
                        "status": "approved",
                        "approved_on": "2024-05-11T19:10:57Z"
                    }
                },
                "asset_type": "photo",
                "user": {
                    "id": "SjiBw4JoYV0",
                    "updated_at": "2024-09-09T04:13:10Z",
                    "username": "garinchadwick",
                    "name": "Garin Chadwick",
                    "first_name": "Garin",
                    "last_name": "Chadwick",
                    "twitter_username": "GarinChadwick",
                    "portfolio_url": "http://www.thenicedirector.com",
                    "bio": "Photography is my passion @garin.chadwick",
                    "location": "Los Angeles",
                    "links": {
                        "self": "https://api.unsplash.com/users/garinchadwick",
                        "html": "https://unsplash.com/@garinchadwick",
                        "photos": "https://api.unsplash.com/users/garinchadwick/photos",
                        "likes": "https://api.unsplash.com/users/garinchadwick/likes",
                        "portfolio": "https://api.unsplash.com/users/garinchadwick/portfolio",
                        "following": "https://api.unsplash.com/users/garinchadwick/following",
                        "followers": "https://api.unsplash.com/users/garinchadwick/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-fb-1546918339-0cab0a15f6d6.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-fb-1546918339-0cab0a15f6d6.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-fb-1546918339-0cab0a15f6d6.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "garin.chadwick",
                    "total_collections": 0,
                    "total_likes": 3,
                    "total_photos": 46,
                    "total_promoted_photos": 28,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "garin.chadwick",
                        "portfolio_url": "http://www.thenicedirector.com",
                        "twitter_username": "GarinChadwick",
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "vhnljj9RkV8",
                "slug": "lego-mini-figure-on-red-chair-vhnljj9RkV8",
                "alternative_slugs": {
                    "en": "lego-mini-figure-on-red-chair-vhnljj9RkV8",
                    "es": "lego-mini-figure-on-red-chair-vhnljj9RkV8",
                    "ja": "赤い椅子の上のレゴミニフィギュア-vhnljj9RkV8",
                    "fr": "mini-figurine-lego-sur-chaise-rouge-vhnljj9RkV8",
                    "it": "mini-figura-lego-su-sedia-rossa-vhnljj9RkV8",
                    "ko": "빨간-의자에-레고-미니-피규어-vhnljj9RkV8",
                    "de": "lego-mini-figur-auf-rotem-stuhl-vhnljj9RkV8",
                    "pt": "figura-do-mini-lego-na-cadeira-vermelha-vhnljj9RkV8"
                },
                "created_at": "2020-05-24T17:29:42Z",
                "updated_at": "2024-09-18T18:36:46Z",
                "promoted_at": null,
                "width": 4000,
                "height": 6000,
                "color": "#400c0c",
                "blur_hash": "L86aPb%4IQM^aXawI|Ne9uNF$_xb",
                "description": "Because I love Lego and I have a lot of these minifigures! ",
                "alt_description": "lego mini figure on red chair",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1590341328520-63256eb32bc3"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/lego-mini-figure-on-red-chair-vhnljj9RkV8",
                    "html": "https://unsplash.com/photos/lego-mini-figure-on-red-chair-vhnljj9RkV8",
                    "download": "https://unsplash.com/photos/vhnljj9RkV8/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/vhnljj9RkV8/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwzfHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 139,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "2ca9ysEs0yY",
                    "updated_at": "2024-08-13T05:38:17Z",
                    "username": "austris_a",
                    "name": "Austris Augusts",
                    "first_name": "Austris",
                    "last_name": "Augusts",
                    "twitter_username": null,
                    "portfolio_url": null,
                    "bio": "Taking photos from time to time. Current setup Nikon D7200 , 40mm macro, 35mm",
                    "location": "Latvia",
                    "links": {
                        "self": "https://api.unsplash.com/users/austris_a",
                        "html": "https://unsplash.com/@austris_a",
                        "photos": "https://api.unsplash.com/users/austris_a/photos",
                        "likes": "https://api.unsplash.com/users/austris_a/likes",
                        "portfolio": "https://api.unsplash.com/users/austris_a/portfolio",
                        "following": "https://api.unsplash.com/users/austris_a/following",
                        "followers": "https://api.unsplash.com/users/austris_a/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1656779833695-4b1f657fcc97image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1656779833695-4b1f657fcc97image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1656779833695-4b1f657fcc97image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "austris.augusts",
                    "total_collections": 0,
                    "total_likes": 16,
                    "total_photos": 157,
                    "total_promoted_photos": 5,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "austris.augusts",
                        "portfolio_url": null,
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "YojfsiUIFbw",
                "slug": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                "alternative_slugs": {
                    "en": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "es": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "ja": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "fr": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "it": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "ko": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "de": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "pt": "a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw"
                },
                "created_at": "2023-01-23T04:39:36Z",
                "updated_at": "2024-08-22T00:18:26Z",
                "promoted_at": null,
                "width": 2876,
                "height": 3835,
                "color": "#260c0c",
                "blur_hash": "LJCO?kN10$ko-nWpM}so9vSe$$wJ",
                "description": "Deadpool",
                "alt_description": "a statue of a man dressed as a deadpool",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1674448417387-345997fcd888?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1674448417387-345997fcd888?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1674448417387-345997fcd888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1674448417387-345997fcd888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1674448417387-345997fcd888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1674448417387-345997fcd888"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "html": "https://unsplash.com/photos/a-statue-of-a-man-dressed-as-a-deadpool-YojfsiUIFbw",
                    "download": "https://unsplash.com/photos/YojfsiUIFbw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/YojfsiUIFbw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw0fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 11,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {
                    "film": {
                        "status": "rejected"
                    },
                    "business-work": {
                        "status": "rejected"
                    },
                    "current-events": {
                        "status": "rejected"
                    },
                    "spirituality": {
                        "status": "rejected"
                    },
                    "people": {
                        "status": "rejected"
                    },
                    "fashion-beauty": {
                        "status": "rejected"
                    },
                    "architecture-interior": {
                        "status": "rejected"
                    },
                    "textures-patterns": {
                        "status": "rejected"
                    },
                    "experimental": {
                        "status": "rejected"
                    },
                    "street-photography": {
                        "status": "rejected"
                    },
                    "travel": {
                        "status": "rejected"
                    },
                    "3d-renders": {
                        "status": "rejected"
                    },
                    "wallpapers": {
                        "status": "rejected"
                    }
                },
                "asset_type": "photo",
                "user": {
                    "id": "3qgEGAEY2Gg",
                    "updated_at": "2024-09-18T10:54:46Z",
                    "username": "vishwanth07",
                    "name": "Vishwanth Pindiboina",
                    "first_name": "Vishwanth",
                    "last_name": "Pindiboina",
                    "twitter_username": null,
                    "portfolio_url": null,
                    "bio": "The world through my eyes.",
                    "location": "Bangalore India",
                    "links": {
                        "self": "https://api.unsplash.com/users/vishwanth07",
                        "html": "https://unsplash.com/@vishwanth07",
                        "photos": "https://api.unsplash.com/users/vishwanth07/photos",
                        "likes": "https://api.unsplash.com/users/vishwanth07/likes",
                        "portfolio": "https://api.unsplash.com/users/vishwanth07/portfolio",
                        "following": "https://api.unsplash.com/users/vishwanth07/following",
                        "followers": "https://api.unsplash.com/users/vishwanth07/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1726455456792-6a9c60a73550image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1726455456792-6a9c60a73550image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1726455456792-6a9c60a73550image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "vishwanth.007?utm_medium=copy_link",
                    "total_collections": 19,
                    "total_likes": 228,
                    "total_photos": 182,
                    "total_promoted_photos": 0,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "vishwanth.007?utm_medium=copy_link",
                        "portfolio_url": null,
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "d2Py_uhXJQo",
                "slug": "the-walking-dead-comic-book-d2Py_uhXJQo",
                "alternative_slugs": {
                    "en": "the-walking-dead-comic-book-d2Py_uhXJQo",
                    "es": "comic-de-the-walking-dead-d2Py_uhXJQo",
                    "ja": "ウォーキングデッドのコミックブック-d2Py_uhXJQo",
                    "fr": "la-bande-dessinee-the-walking-dead-d2Py_uhXJQo",
                    "it": "il-fumetto-di-the-walking-dead-d2Py_uhXJQo",
                    "ko": "워킹-데드-만화책-d2Py_uhXJQo",
                    "de": "the-walking-dead-comic-d2Py_uhXJQo",
                    "pt": "hq-the-walking-dead-d2Py_uhXJQo"
                },
                "created_at": "2020-10-02T13:27:16Z",
                "updated_at": "2024-09-20T03:39:53Z",
                "promoted_at": null,
                "width": 3036,
                "height": 4048,
                "color": "#0c2626",
                "blur_hash": "LEHnKY~o=dD%-5F2RjOY-VSjAJ%2",
                "description": "Comics, Batman, Superman, Wonder Woman, Justice League, Marvel comics, DC comics, Batman comics, Superman comics, nostalgia. ",
                "alt_description": "the walking dead comic book",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601645191163-3fc0d5d64e35"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/the-walking-dead-comic-book-d2Py_uhXJQo",
                    "html": "https://unsplash.com/photos/the-walking-dead-comic-book-d2Py_uhXJQo",
                    "download": "https://unsplash.com/photos/d2Py_uhXJQo/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/d2Py_uhXJQo/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw1fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 508,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "iEB0QIWdWwM",
                    "updated_at": "2024-07-31T02:01:45Z",
                    "username": "devp10",
                    "name": "Dev",
                    "first_name": "Dev",
                    "last_name": null,
                    "twitter_username": null,
                    "portfolio_url": "https://weknowcricket.com/",
                    "bio": "I kinda like beaches 🌴🌊",
                    "location": null,
                    "links": {
                        "self": "https://api.unsplash.com/users/devp10",
                        "html": "https://unsplash.com/@devp10",
                        "photos": "https://api.unsplash.com/users/devp10/photos",
                        "likes": "https://api.unsplash.com/users/devp10/likes",
                        "portfolio": "https://api.unsplash.com/users/devp10/portfolio",
                        "following": "https://api.unsplash.com/users/devp10/following",
                        "followers": "https://api.unsplash.com/users/devp10/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-fb-1517840931-52c6e97dfceb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-fb-1517840931-52c6e97dfceb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-fb-1517840931-52c6e97dfceb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": null,
                    "total_collections": 0,
                    "total_likes": 4,
                    "total_photos": 10,
                    "total_promoted_photos": 0,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": null,
                        "portfolio_url": "https://weknowcricket.com/",
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "99rNTJ22Zps",
                "slug": "a-statue-of-a-man-in-a-superman-suit-99rNTJ22Zps",
                "alternative_slugs": {
                    "en": "a-statue-of-a-man-in-a-superman-suit-99rNTJ22Zps",
                    "es": "una-estatua-de-un-hombre-con-un-traje-de-superman-99rNTJ22Zps",
                    "ja": "スーパーマンのスーツを着た男の像-99rNTJ22Zps",
                    "fr": "une-statue-dun-homme-dans-un-costume-de-superman-99rNTJ22Zps",
                    "it": "una-statua-di-un-uomo-in-un-costume-da-superman-99rNTJ22Zps",
                    "ko": "슈퍼맨-슈트를-입은-남자의-동상-99rNTJ22Zps",
                    "de": "eine-statue-eines-mannes-in-einem-superman-anzug-99rNTJ22Zps",
                    "pt": "uma-estatua-de-um-homem-em-um-terno-superman-99rNTJ22Zps"
                },
                "created_at": "2023-12-09T16:14:12Z",
                "updated_at": "2024-07-26T11:09:21Z",
                "promoted_at": null,
                "width": 4000,
                "height": 6000,
                "color": "#0c2626",
                "blur_hash": "LPBgb,?^%Lr=_3?b%2e.M^r=ofog",
                "description": "sup",
                "alt_description": "a statue of a man in a superman suit",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1702138129392-364adea0ad00?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1702138129392-364adea0ad00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1702138129392-364adea0ad00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1702138129392-364adea0ad00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1702138129392-364adea0ad00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1702138129392-364adea0ad00"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/a-statue-of-a-man-in-a-superman-suit-99rNTJ22Zps",
                    "html": "https://unsplash.com/photos/a-statue-of-a-man-in-a-superman-suit-99rNTJ22Zps",
                    "download": "https://unsplash.com/photos/99rNTJ22Zps/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/99rNTJ22Zps/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw2fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 5,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "I2aWoKgRtRk",
                    "updated_at": "2024-06-29T05:57:06Z",
                    "username": "egorghetto",
                    "name": "Eduardo Gorghetto",
                    "first_name": "Eduardo",
                    "last_name": "Gorghetto",
                    "twitter_username": null,
                    "portfolio_url": "https://www.instagram.com/egorghetto/",
                    "bio": "eduardogorghetto.com",
                    "location": "Mirassol, Brazil",
                    "links": {
                        "self": "https://api.unsplash.com/users/egorghetto",
                        "html": "https://unsplash.com/@egorghetto",
                        "photos": "https://api.unsplash.com/users/egorghetto/photos",
                        "likes": "https://api.unsplash.com/users/egorghetto/likes",
                        "portfolio": "https://api.unsplash.com/users/egorghetto/portfolio",
                        "following": "https://api.unsplash.com/users/egorghetto/following",
                        "followers": "https://api.unsplash.com/users/egorghetto/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1612447496033-7819a627566fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1612447496033-7819a627566fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1612447496033-7819a627566fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "egorghetto",
                    "total_collections": 0,
                    "total_likes": 4,
                    "total_photos": 107,
                    "total_promoted_photos": 52,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": true,
                    "social": {
                        "instagram_username": "egorghetto",
                        "portfolio_url": "https://www.instagram.com/egorghetto/",
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "5AkEA57hUHk",
                "slug": "a-close-up-of-a-toy-on-a-table-5AkEA57hUHk",
                "alternative_slugs": {
                    "en": "a-close-up-of-a-toy-on-a-table-5AkEA57hUHk",
                    "es": "un-primer-plano-de-un-juguete-sobre-una-mesa-5AkEA57hUHk",
                    "ja": "テーブルの上のおもちゃのクローズアップ-5AkEA57hUHk",
                    "fr": "gros-plan-dun-jouet-sur-une-table-5AkEA57hUHk",
                    "it": "un-primo-piano-di-un-giocattolo-su-un-tavolo-5AkEA57hUHk",
                    "ko": "테이블-위의-장난감-클로즈업-5AkEA57hUHk",
                    "de": "nahaufnahme-eines-spielzeugs-auf-einem-tisch-5AkEA57hUHk",
                    "pt": "um-close-up-de-um-brinquedo-em-uma-mesa-5AkEA57hUHk"
                },
                "created_at": "2021-12-16T12:44:49Z",
                "updated_at": "2024-08-17T07:58:15Z",
                "promoted_at": null,
                "width": 2592,
                "height": 4608,
                "color": "#d9c0a6",
                "blur_hash": "LeI#45s.Iooe~Vt6NGofE1kCs.bG",
                "description": "Christmas Superman",
                "alt_description": "a close up of a toy on a table",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1639658641344-093244983ece?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1639658641344-093244983ece?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1639658641344-093244983ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1639658641344-093244983ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1639658641344-093244983ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1639658641344-093244983ece"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/a-close-up-of-a-toy-on-a-table-5AkEA57hUHk",
                    "html": "https://unsplash.com/photos/a-close-up-of-a-toy-on-a-table-5AkEA57hUHk",
                    "download": "https://unsplash.com/photos/5AkEA57hUHk/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/5AkEA57hUHk/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw3fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 5,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "vIOLjrxTDgQ",
                    "updated_at": "2024-09-11T12:29:13Z",
                    "username": "ctarzi",
                    "name": "Cristian Tarzi",
                    "first_name": "Cristian",
                    "last_name": "Tarzi",
                    "twitter_username": "unpesounkinder",
                    "portfolio_url": "https://ctarzi.com/",
                    "bio": "I am a flawless, creative and hardworking guy. Except when I see a dog. \r\nThen I have to go play with him. Sorry for that.  Here's my portfolio: https://ctarzi.com/",
                    "location": "Buenos Aires",
                    "links": {
                        "self": "https://api.unsplash.com/users/ctarzi",
                        "html": "https://unsplash.com/@ctarzi",
                        "photos": "https://api.unsplash.com/users/ctarzi/photos",
                        "likes": "https://api.unsplash.com/users/ctarzi/likes",
                        "portfolio": "https://api.unsplash.com/users/ctarzi/portfolio",
                        "following": "https://api.unsplash.com/users/ctarzi/following",
                        "followers": "https://api.unsplash.com/users/ctarzi/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1588715898826-7f6e22bf6838image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1588715898826-7f6e22bf6838image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1588715898826-7f6e22bf6838image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "ctarzi",
                    "total_collections": 0,
                    "total_likes": 20,
                    "total_photos": 215,
                    "total_promoted_photos": 0,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "ctarzi",
                        "portfolio_url": "https://ctarzi.com/",
                        "twitter_username": "unpesounkinder",
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "MQdqK8gMjX0",
                "slug": "a-statue-of-a-superman-stands-in-front-of-a-store-MQdqK8gMjX0",
                "alternative_slugs": {
                    "en": "a-statue-of-a-superman-stands-in-front-of-a-store-MQdqK8gMjX0",
                    "es": "una-estatua-de-un-superman-frente-a-una-tienda-MQdqK8gMjX0",
                    "ja": "店の前にスーパーマンの像が立っています-MQdqK8gMjX0",
                    "fr": "une-statue-dun-superman-se-dresse-devant-un-magasin-MQdqK8gMjX0",
                    "it": "una-statua-di-un-superman-si-trova-di-fronte-a-un-negozio-MQdqK8gMjX0",
                    "ko": "가게-앞에-서-있는-슈퍼맨-동상-MQdqK8gMjX0",
                    "de": "eine-statue-eines-ubermenschen-steht-vor-einem-geschaft-MQdqK8gMjX0",
                    "pt": "uma-estatua-de-um-super-homem-esta-em-frente-a-uma-loja-MQdqK8gMjX0"
                },
                "created_at": "2024-02-28T17:57:48Z",
                "updated_at": "2024-09-14T23:51:15Z",
                "promoted_at": null,
                "width": 2529,
                "height": 3272,
                "color": "#737373",
                "blur_hash": "LWE_?X~B%1xF%#o#a$aytlx]t7R%",
                "description": "Hard Candy",
                "alt_description": "a statue of a superman stands in front of a store",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1709142955705-604ce96557a2?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1709142955705-604ce96557a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1709142955705-604ce96557a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1709142955705-604ce96557a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1709142955705-604ce96557a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709142955705-604ce96557a2"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/a-statue-of-a-superman-stands-in-front-of-a-store-MQdqK8gMjX0",
                    "html": "https://unsplash.com/photos/a-statue-of-a-superman-stands-in-front-of-a-store-MQdqK8gMjX0",
                    "download": "https://unsplash.com/photos/MQdqK8gMjX0/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/MQdqK8gMjX0/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw4fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 0,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {
                    "film": {
                        "status": "rejected"
                    },
                    "street-photography": {
                        "status": "rejected"
                    }
                },
                "asset_type": "photo",
                "user": {
                    "id": "ff91eBWxKYQ",
                    "updated_at": "2024-09-19T17:46:36Z",
                    "username": "isaacwolff",
                    "name": "Isaac Wolff",
                    "first_name": "Isaac",
                    "last_name": "Wolff",
                    "twitter_username": null,
                    "portfolio_url": null,
                    "bio": "exploring, experiencing, experimenting | artist | photographer",
                    "location": null,
                    "links": {
                        "self": "https://api.unsplash.com/users/isaacwolff",
                        "html": "https://unsplash.com/@isaacwolff",
                        "photos": "https://api.unsplash.com/users/isaacwolff/photos",
                        "likes": "https://api.unsplash.com/users/isaacwolff/likes",
                        "portfolio": "https://api.unsplash.com/users/isaacwolff/portfolio",
                        "following": "https://api.unsplash.com/users/isaacwolff/following",
                        "followers": "https://api.unsplash.com/users/isaacwolff/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1675733787612-c38f43b353dcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1675733787612-c38f43b353dcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1675733787612-c38f43b353dcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "Isaac_wolff",
                    "total_collections": 5,
                    "total_likes": 0,
                    "total_photos": 109,
                    "total_promoted_photos": 0,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": true,
                    "social": {
                        "instagram_username": "Isaac_wolff",
                        "portfolio_url": null,
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "tDJ9yxHAMFw",
                "slug": "a-statue-of-a-man-in-a-superman-suit-tDJ9yxHAMFw",
                "alternative_slugs": {
                    "en": "a-statue-of-a-man-in-a-superman-suit-tDJ9yxHAMFw",
                    "es": "una-estatua-de-un-hombre-con-un-traje-de-superman-tDJ9yxHAMFw",
                    "ja": "スーパーマンのスーツを着た男の像-tDJ9yxHAMFw",
                    "fr": "une-statue-dun-homme-en-costume-de-superman-tDJ9yxHAMFw",
                    "it": "una-statua-di-un-uomo-in-un-costume-da-superman-tDJ9yxHAMFw",
                    "ko": "슈퍼맨-슈트를-입은-남자의-동상-tDJ9yxHAMFw",
                    "de": "eine-statue-eines-mannes-in-einem-superman-anzug-tDJ9yxHAMFw",
                    "pt": "uma-estatua-de-um-homem-em-um-terno-de-super-homem-tDJ9yxHAMFw"
                },
                "created_at": "2021-10-22T00:24:47Z",
                "updated_at": "2024-07-26T07:15:34Z",
                "promoted_at": null,
                "width": 3648,
                "height": 5472,
                "color": "#260c26",
                "blur_hash": "LTA,FVniNKbHRjjFnhoL4,ogs,ay",
                "description": null,
                "alt_description": "a statue of a man in a superman suit",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1634861949375-3fc4bd412f2f?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1634861949375-3fc4bd412f2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1634861949375-3fc4bd412f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1634861949375-3fc4bd412f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1634861949375-3fc4bd412f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1634861949375-3fc4bd412f2f"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/a-statue-of-a-man-in-a-superman-suit-tDJ9yxHAMFw",
                    "html": "https://unsplash.com/photos/a-statue-of-a-man-in-a-superman-suit-tDJ9yxHAMFw",
                    "download": "https://unsplash.com/photos/tDJ9yxHAMFw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA",
                    "download_location": "https://api.unsplash.com/photos/tDJ9yxHAMFw/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHw5fHxzdXBlcm1hbnxlbnwwfDF8fHwxNzI2ODQzMjQyfDA"
                },
                "likes": 23,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "9BAizTZYCFw",
                    "updated_at": "2024-09-11T01:20:55Z",
                    "username": "hportillo",
                    "name": "Humberto Portillo",
                    "first_name": "Humberto",
                    "last_name": "Portillo",
                    "twitter_username": null,
                    "portfolio_url": "http://hportillo.com",
                    "bio": "I try to take cool photos",
                    "location": null,
                    "links": {
                        "self": "https://api.unsplash.com/users/hportillo",
                        "html": "https://unsplash.com/@hportillo",
                        "photos": "https://api.unsplash.com/users/hportillo/photos",
                        "likes": "https://api.unsplash.com/users/hportillo/likes",
                        "portfolio": "https://api.unsplash.com/users/hportillo/portfolio",
                        "following": "https://api.unsplash.com/users/hportillo/following",
                        "followers": "https://api.unsplash.com/users/hportillo/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1608245614502-cc8c43f512bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-1608245614502-cc8c43f512bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-1608245614502-cc8c43f512bfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "humberto_p_",
                    "total_collections": 4,
                    "total_likes": 5,
                    "total_photos": 206,
                    "total_promoted_photos": 9,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "humberto_p_",
                        "portfolio_url": "http://hportillo.com",
                        "twitter_username": null,
                        "paypal_email": null
                    }
                }
            },
            {
                "id": "TnXsLbvP2Qs",
                "slug": "marvel-captain-america-figurine-TnXsLbvP2Qs",
                "alternative_slugs": {
                    "en": "marvel-captain-america-figurine-TnXsLbvP2Qs",
                    "es": "figura-del-capitan-america-de-marvel-TnXsLbvP2Qs",
                    "ja": "マーベルキャプテンアメリカの置物-TnXsLbvP2Qs",
                    "fr": "figurine-marvel-captain-america-TnXsLbvP2Qs",
                    "it": "statuetta-marvel-di-capitan-america-TnXsLbvP2Qs",
                    "ko": "마블-캡틴-아메리카-피규어-TnXsLbvP2Qs",
                    "de": "marvel-captain-america-figur-TnXsLbvP2Qs",
                    "pt": "estatueta-do-capitao-america-da-marvel-TnXsLbvP2Qs"
                },
                "created_at": "2019-06-21T20:44:48Z",
                "updated_at": "2024-07-26T09:29:23Z",
                "promoted_at": null,
                "width": 3024,
                "height": 4032,
                "color": "#0c2673",
                "blur_hash": "LE97V$-YEMJQ#%siRiS#1UJX%3$i",
                "description": null,
                "alt_description": "Marvel Captain America figurine",
                "breadcrumbs": [],
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww&ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1561149877-84d268ba65b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww&ixlib=rb-4.0.3&q=85",
                    "regular": "https://images.unsplash.com/photo-1561149877-84d268ba65b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww&ixlib=rb-4.0.3&q=80&w=1080",
                    "small": "https://images.unsplash.com/photo-1561149877-84d268ba65b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww&ixlib=rb-4.0.3&q=80&w=400",
                    "thumb": "https://images.unsplash.com/photo-1561149877-84d268ba65b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww&ixlib=rb-4.0.3&q=80&w=200",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561149877-84d268ba65b8"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/marvel-captain-america-figurine-TnXsLbvP2Qs",
                    "html": "https://unsplash.com/photos/marvel-captain-america-figurine-TnXsLbvP2Qs",
                    "download": "https://unsplash.com/photos/TnXsLbvP2Qs/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww",
                    "download_location": "https://api.unsplash.com/photos/TnXsLbvP2Qs/download?ixid=M3w2NTU4NzV8MHwxfHNlYXJjaHwxMHx8c3VwZXJtYW58ZW58MHwxfHx8MTcyNjg0MzI0Mnww"
                },
                "likes": 141,
                "liked_by_user": false,
                "current_user_collections": [],
                "sponsorship": null,
                "topic_submissions": {},
                "asset_type": "photo",
                "user": {
                    "id": "xpT7iFUi534",
                    "updated_at": "2024-06-15T02:27:53Z",
                    "username": "tjohnfredrick",
                    "name": "Fredrick john",
                    "first_name": "Fredrick",
                    "last_name": "john",
                    "twitter_username": "Fredrickjohnt",
                    "portfolio_url": null,
                    "bio": "My interest in photography is not to capture an image I see or even have in my mind, but to explore the potential of moments I can only begin to imagine.",
                    "location": "Chennai",
                    "links": {
                        "self": "https://api.unsplash.com/users/tjohnfredrick",
                        "html": "https://unsplash.com/@tjohnfredrick",
                        "photos": "https://api.unsplash.com/users/tjohnfredrick/photos",
                        "likes": "https://api.unsplash.com/users/tjohnfredrick/likes",
                        "portfolio": "https://api.unsplash.com/users/tjohnfredrick/portfolio",
                        "following": "https://api.unsplash.com/users/tjohnfredrick/following",
                        "followers": "https://api.unsplash.com/users/tjohnfredrick/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-fb-1515578601-a2b24e42d713.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                        "medium": "https://images.unsplash.com/profile-fb-1515578601-a2b24e42d713.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                        "large": "https://images.unsplash.com/profile-fb-1515578601-a2b24e42d713.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "tjohnfredrick",
                    "total_collections": 0,
                    "total_likes": 0,
                    "total_photos": 14,
                    "total_promoted_photos": 0,
                    "total_illustrations": 0,
                    "total_promoted_illustrations": 0,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "tjohnfredrick",
                        "portfolio_url": null,
                        "twitter_username": "Fredrickjohnt",
                        "paypal_email": null
                    }
                }
            }
        ]
    },
    "originalResponse": {}
}
