// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function getCurrentTab() {

  // chrome.tabs.getSelected(null, function(tab) {
  //   // Send a request to the content script.
  //   chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
  //     console.log(response.dom);
  //   });
  // });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });

  // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //   tab = tabs[0];
  //   console.log(tab);
  //   chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
  //     console.log(response);
  //   });
  // });
}

function getLinkedinFields() {
  var fullNameWords = chrome.tabs.getCurrent.getElementById('name').textContent.split(' ');
  var firstName = fullNameWords.splice(0, fullNameWords.length - 1).join(' ');
  var lastName = fullNameWords[fullNameWords.length - 1];
  return {
    first_name: firstName,
    last_name: lastName
  };
}

function populateFields(fields) {
  Object.keys(fields).forEach(function (key) {
    console.log('Writing ' + key + ':  ' + fields[key]);
    document.getElementById(key).value = fields[key];
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTab();
});
