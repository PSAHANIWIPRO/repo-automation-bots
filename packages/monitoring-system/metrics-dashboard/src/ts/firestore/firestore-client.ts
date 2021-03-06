// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/* eslint-disable node/no-unpublished-import */
import * as firebase from 'firebase/app';
/** Required for Firestore capabilities */
/* eslint-disable node/no-unpublished-import */
import 'firebase/firestore';
import firestoreConfig = require('./firestore-config.json');

/**
 * Type aliases for concise code
 */
export type Firestore = firebase.firestore.Firestore;

export class AuthenticatedFirestore {
  private static firestore: Firestore;

  /**
   * Initializes the static Firestore client if it
   * is not already initialized
   */
  public static getClient(): Firestore {
    if (!this.firestore) {
      firebase.initializeApp(firestoreConfig);
      this.firestore = firebase.firestore();
    }
    return this.firestore;
  }
}
