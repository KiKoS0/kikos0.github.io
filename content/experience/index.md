+++
title = "Experience"
+++

# Jobs

---

Professionally, so far I have been involved in a couple of summer
internships and freelancing projects:

{{ jobcard(

    name="Business & AI",
    description="Building a distributed crawling system capable of collecting millions of vehicle ad records per day and maintaining it up to date while tracking pricing changes. ",
    imglnk="./experience/bandai.png",
    imgalt="Business & AI",
    date="Aug-2020 -> Sep-2020 // Mar-2021 -> Jun-2021",
    lnk="https://www.business-and-ai.com/"
    tags=["scratch","Python","Celery","FastAPI","docker","docker-compose"]) 

}}
{{ jobcard(

    name="Paypos Tunisie",
    description="Implemented android background services that geolocate company owned devices and tracking their path.
    It was done through a .Net Core backend and a database that supported Spatial Data.",
    imglnk="./experience/paypos.png",
    imgalt="Paypos Tunisie",
    date="Aug-2019 -> Jan-2020",
    lnk="http://paypos.tn/",
    tags=["android",".net core","mssql"]) 

}}

    

# Personal projects

---
There are tons of toy/incomplete/prototype projects on my [github](https://github.com/KiKoS0/) so feel free to check 
them out, those are the only ones I felt inclined to discuss and/or document:
* [Dead by Daylight Tooltips](https://dbdtwitch.com) — Twitch addon that improves the viewer's experience by presenting game information right in the stream.
It is currently used by thousands of streamers and averages 180K unique visitor a day. It is built with [Phoenix](https://www.phoenixframework.org) combined with OpenCV and Tensorflow workers, all running on a tiny [Kubernetes](https://kubernetes.io) cluster.
* [Ray Tracer](https://github.com/KiKoS0/ray-tracer) — a toy implementation that supports [wasm](https://webassembly.org/) 
of a realtime renderer in [Rust](https://www.rust-lang.org/).
* [PE cryptor](https://github.com/KiKoS0/Portable-Executable-Encryptor) — a library that encrypts a compiled
 [PE](https://docs.microsoft.com/en-us/windows/win32/debug/pe-format) file.