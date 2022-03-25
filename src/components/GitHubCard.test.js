import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard'

test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
});
