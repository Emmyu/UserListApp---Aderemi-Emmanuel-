import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import users from '../../dataset.json';

export default function HomeScreen() {
  const [filter, setFilter] = useState('All');

  const getUsers = () => {
    if (filter === 'All') {
      return users;
    }
    return users.filter((user) => user.role === filter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.btn, filter === 'Admin' && styles.activeBtn]}
          onPress={() => setFilter('Admin')}
        >
          <Text style={[styles.btnText, filter === 'Admin' && styles.activeBtnText]}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, filter === 'Customer' && styles.activeBtn]}
          onPress={() => setFilter('Customer')}
        >
          <Text style={[styles.btnText, filter === 'Customer' && styles.activeBtnText]}>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, filter === 'Vendor' && styles.activeBtn]}
          onPress={() => setFilter('Vendor')}
        >
          <Text style={[styles.btnText, filter === 'Vendor' && styles.activeBtnText]}>Vendor</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={getUsers()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userRole}>{item.role}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  activeBtn: {
    backgroundColor: '#007AFF',
  },
  btnText: {
    color: '#007AFF',
    fontSize: 14,
  },
  activeBtnText: {
    color: '#fff',
  },
  userItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    color: '#333',
  },
  userRole: {
    fontSize: 13,
    color: '#666',
  },
});
