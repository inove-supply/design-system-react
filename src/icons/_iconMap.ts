import { AddIcon } from './AddIcon';
import { DoubleArrowLeftIcon } from './DoubleArrowLeftIcon';
import { DoubleArrowRightIcon } from './DoubleArrowRightIcon';
import { DoubleArroUpIcon } from './DoubleArroUpIcon';
import { DoubleArrowDownIcon } from './DoubleArrowDownIcon';

import { SingleArrowDownIcon } from './SingleArrowDownIcon';
import { SingleArrowLeftIcon } from './SingleArrowLeftIcon';
import { SingleArrowRightIcon } from './SingleArrowRightIcon';
import { SingleArrowUpIcon } from './SingleArrowUpIcon';

import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import { ArrowTopIcon } from './ArrowTopIcon';
import { ArrowDownIcon } from './ArrowDownIcon';

import { PackageIcon } from './PackageIcon';
import { TickIcon } from './TickIcon';
import { CopyIcon } from './CopyIcon';
import { DeleteIcon } from './DeleteIcon';
import { DotsMenuIcon } from './DotsMenuIcon';
import { EditIcon } from './EditIcon';
import { EraseIcon } from './EraseIcon';
import { FilterIcon } from './FilterIcon';
import { HelpIcon } from './HelpIcon';
import { ImportIcon } from './ImportIcon';
import { LockIcon } from './LockIcon';
import { LogIcon } from './LogIcon';
import { MapIcon } from './MapIcon';
import { ParamIcon } from './ParamIcon';
import { RampIcon } from './RampIcon';
import { RefreshIcon } from './RefreshIcon';
import { RejectIcon } from './RejectIcon';
import { SorterIcon } from './SorterIcon';
import { SpinnerIcon } from './SpinnerIcon';
import { StationIcon } from './StationIcon';
import { UnlockIcon } from './UnlockIcon';
import { UsersIcon } from './UsersIcon';
import { UserIcon } from './UserIcon';
import { ExportIcon } from './ExportIcon';
import { CancelIcon } from './CancelIcon';
import { ConfigIcon } from './ConfigIcon';
import { WavesIcon } from './WavesIcon';
import { MenuIcon } from './MenuIcon';
import { MaximizeIcon } from './MaximizeIcon';
import { ClockIcon } from './ClockIcon';
import { SearchIcon } from './SearchIcon';




type IconProps = {
  [key: string]: ({
    color,
    strokeWidth,
    size
  }: {
    color?: string
    strokeWidth?: number
    size?: number
  }) => JSX.Element
}


const iconMap: IconProps = {
  AddIcon,
  CancelIcon,
  DeleteIcon,
  EditIcon,
  EraseIcon,
  TickIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopIcon,
  ArrowDownIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  DoubleArroUpIcon,
  DoubleArrowDownIcon,
  SingleArrowDownIcon,
  SingleArrowLeftIcon,
  SingleArrowRightIcon,
  SingleArrowUpIcon,
  PackageIcon,
  CopyIcon,
  DotsMenuIcon,
  FilterIcon,
  HelpIcon,
  ImportIcon,
  ExportIcon,
  LockIcon,
  UnlockIcon,
  LogIcon,
  MapIcon,
  ParamIcon,
  RampIcon,
  RefreshIcon,
  RejectIcon,
  SorterIcon,
  SpinnerIcon,
  StationIcon,
  UsersIcon,
  UserIcon,
  WavesIcon,
  ConfigIcon,
  MenuIcon,
  MaximizeIcon,
  ClockIcon,
  SearchIcon,
};

export default iconMap
