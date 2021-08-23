/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

/* Pass the embed mode and viewer customization here */
var viewerConfig = {
    defaultViewMode: "",
    showAnnotationTools: false,
    showLeftHandPanel: false,
    showDownloadPDF: true,
    showPrintPDF: false,
};

/* Wait for Adobe Document Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "5d4d1f8df8e14ddc840ac7d04837119d",
        /* Pass the div id in which PDF should be rendered */
        divId: "adobe-dc-view",
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "Jessica Peters - Resume.pdf",
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Jessica Peters - Resume.pdf"
        }
    }, viewerConfig);
});
